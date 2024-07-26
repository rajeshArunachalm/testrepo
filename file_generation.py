import os
import shutil
import threading
import logging
from flask import Flask, request, send_from_directory, jsonify

app = Flask(__name__)

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

generation_status = {
    "status": "Not Started",
    "files": []
}

def get_available_space_gb(path='.'):
    """Return the available disk space in GB."""
    total, used, free = shutil.disk_usage(path)
    return free / (1024 * 1024 * 1024)

def generate_file(filename, size_mb):
    """Generate a file with the specified size in megabytes."""
    logger.info(f"Generating file: {filename} of size: {size_mb} MB")
    with open(filename, 'wb') as f:
        chunk_size = 10 * 1024 * 1024  # 10MB chunk size
        for _ in range(int(size_mb * 1024 // 10)):
            f.write(b'0' * chunk_size)
        remaining_size = int((size_mb * 1024 * 1024) % chunk_size)
        if remaining_size > 0:
            f.write(b'0' * remaining_size)

def generate_files():
    """Generate files of specified sizes."""
    global generation_status
    logger.info("Starting file generation process...")
    file_sizes = {
        '10kb': 10 / 1024,
        '10mb': 10,
        '50mb': 50,
        '100mb': 100,
        '500mb': 500
    }
    
    os.makedirs('generated_files', exist_ok=True)
    generation_status["status"] = "In Progress"
    for filename, size_mb in file_sizes.items():
        available_space_gb = get_available_space_gb()
        required_space_gb = size_mb / 1024
        if available_space_gb < required_space_gb:
            logger.error(f"Not enough disk space to generate file {filename}. Available: {available_space_gb:.2f} GB, Required: {required_space_gb:.2f} GB")
            generation_status["status"] = "Error"
            return
        try:
            generate_file(f'generated_files/{filename}', size_mb)
            generation_status["files"].append(filename)
        except Exception as e:
            logger.error(f"Error generating file {filename}: {e}")
            generation_status["status"] = "Error"
            return
    
    generation_status["status"] = "Completed"
    logger.info("File generation process completed.")

@app.route('/generate-files', methods=['GET'])
def start_generation():
    """Endpoint to start file generation."""
    if generation_status["status"] == "Not Started":
        threading.Thread(target=generate_files).start()
        return jsonify({"status": "Generation started. Please wait."})
    elif generation_status["status"] == "In Progress":
        return jsonify({"status": "Generation in progress. Please wait."})
    else:
        return jsonify({"status": "Generation already completed."})

@app.route('/generation-status', methods=['GET'])
def check_status():
    """Endpoint to check file generation status."""
    return jsonify(generation_status)

@app.route('/files/<filename>')
def download_file(filename):
    logger.info(f"Downloading file: {filename}")
    return send_from_directory('generated_files', filename)

@app.route('/files')
def list_files():
    os.makedirs('generated_files', exist_ok=True)
    files = os.listdir('generated_files')
    logger.info(f"Listing files: {files}")
    return jsonify({'files': files})

if __name__ == "__main__":
    os.makedirs('generated_files', exist_ok=True)
    app.run(host='0.0.0.0', port=8080)

