from flask import Flask, request, send_from_directory, jsonify, render_template_string
import os
import threading
import time
import psutil

app = Flask(__name__)

cpu_load = False
memory_load = False
cpu_usage = 0
memory_usage = 0

def increase_cpu_load():
    global cpu_load, cpu_usage
    while cpu_load:
        # Busy loop to keep CPU at 100%
        while cpu_load:
            pass
        cpu_usage = psutil.cpu_percent(interval=0.1)

def cpu_load_worker():
    while True:
        if cpu_load:
            # Busy loop to keep CPU at 100%
            while cpu_load:
                pass

def start_cpu_load():
    global cpu_load, cpu_usage
    cpu_load = True
    # Start multiple threads to utilize multiple CPU cores
    for _ in range(os.cpu_count()):
        threading.Thread(target=cpu_load_worker).start()
    while cpu_load:
        cpu_usage = psutil.cpu_percent(interval=0.1)

def increase_memory_load():
    global memory_load, memory_usage
    dummy_list = []
    while memory_load:
        dummy_list.extend([' ' * 10**6] * 100)  # Add 100 MB per iteration
        memory_usage = psutil.virtual_memory().percent
        time.sleep(0.1)  # Short sleep to avoid locking up the system completely

@app.route('/')
def index():
    return render_template_string('''
    <!doctype html>
    <title>Load Testing Application</title>
    <h1>Upload File</h1>
    <form method=post enctype=multipart/form-data action="/upload">
      <input type=file name=file>
      <input type=submit value=Upload>
    </form>
    <h1>Download File</h1>
    <form method=get action="/download">
      <input type=text name=filename placeholder="Enter filename">
      <input type=submit value=Download>
    </form>
    <h1>CPU Load</h1>
    <form method=post action="/cpu/start">
      <input type=submit value="Start CPU Load">
    </form>
    <form method=post action="/cpu/stop">
      <input type=submit value="Stop CPU Load">
    </form>
    <h2>CPU Usage: <span id="cpu_usage">0</span>%</h2>
    <h1>Memory Load</h1>
    <form method=post action="/memory/start">
      <input type=submit value="Start Memory Load">
    </form>
    <form method=post action="/memory/stop">
      <input type=submit value="Stop Memory Load">
    </form>
    <h2>Memory Usage: <span id="memory_usage">0</span>%</h2>

    <script>
      function fetchStatus() {
        fetch('/cpu/status')
          .then(response => response.json())
          .then(data => {
            document.getElementById('cpu_usage').innerText = data.cpu_usage;
          });

        fetch('/memory/status')
          .then(response => response.json())
          .then(data => {
            document.getElementById('memory_usage').innerText = data.memory_usage;
          });
      }

      setInterval(fetchStatus, 3000);
    </script>
    ''')

@app.route('/upload', methods=['POST'])
def upload_file():
    file = request.files['file']
    file.save(os.path.join('uploads', file.filename))
    return 'File uploaded successfully'

@app.route('/download', methods=['GET'])
def download_file():
    filename = request.args.get('filename')
    return send_from_directory('uploads', filename)

@app.route('/cpu/start', methods=['POST'])
def start_cpu_load_route():
    global cpu_load
    cpu_load = True
    threading.Thread(target=start_cpu_load).start()
    return 'CPU load started'

@app.route('/cpu/stop', methods=['POST'])
def stop_cpu_load():
    global cpu_load
    cpu_load = False
    return 'CPU load stopped'

@app.route('/cpu/status', methods=['GET'])
def cpu_status():
    return jsonify({'cpu_usage': cpu_usage})

@app.route('/memory/start', methods=['POST'])
def start_memory_load():
    global memory_load
    memory_load = True
    threading.Thread(target=increase_memory_load).start()
    return 'Memory load started'

@app.route('/memory/stop', methods=['POST'])
def stop_memory_load():
    global memory_load
    memory_load = False
    return 'Memory load stopped'

@app.route('/memory/status', methods=['GET'])
def memory_status():
    return jsonify({'memory_usage': memory_usage})

if __name__ == '__main__':
    os.makedirs('uploads', exist_ok=True)
    app.run(host='0.0.0.0', port=5000)

