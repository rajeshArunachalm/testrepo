import os
from flask import Flask, request, send_from_directory, jsonify

app = Flask(__name__)

def generate_file(filename, size_mb):
    """Generate a file with the specified size in megabytes."""
    with open(filename, 'wb') as f:
        f.write(b'0' * (size_mb * 1024 * 1024))

@app.route('/generate-files', methods=['POST'])
def generate_files():
    """Generate files of specified sizes."""
    file_sizes = request.json.get('file_sizes', {
        '10kb': 10 / 1024,
        '10mb': 10,
        '100mb': 100,
        '500mb': 500,
        '1gb': 1024,
        '2gb': 2048,
        '5gb': 5120,
        '10gb': 10240
    })
    
    os.makedirs('generated_files', exist_ok=True)
    for filename, size_mb in file_sizes.items():
        generate_file(f'generated_files/{filename}', size_mb)
    
    return jsonify({'status': 'files generated', 'files': list(file_sizes.keys())})

@app.route('/files/<filename>')
def download_file(filename):
    return send_from_directory('generated_files', filename)

@app.route('/files')
def list_files():
    files = os.listdir('generated_files')
    return jsonify({'files': files})

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080)

