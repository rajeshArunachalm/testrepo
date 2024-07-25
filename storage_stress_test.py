import os
import time
import threading
from flask import Flask, jsonify

app = Flask(__name__)

storage_usage = []

def write_data_to_file(filename, size_mb):
    """Write specified size of data to a file."""
    with open(filename, 'ab') as f:
        f.write(b'0' * (size_mb * 1024 * 1024))

def storage_stress_test(filename, initial_size_mb, increment_size_mb, sleep_time):
    """Continuously increase storage usage by writing more data to a file."""
    global storage_usage
    current_size = initial_size_mb

    while True:
        write_data_to_file(filename, current_size)
        storage_usage.append(current_size)
        current_size += increment_size_mb
        time.sleep(sleep_time)

@app.route('/storage-usage')
def get_storage_usage():
    return jsonify(storage_usage)

if __name__ == "__main__":
    filename = 'stress_test_file.dat'
    initial_size_mb = 10  # Initial file size in MB
    increment_size_mb = 10  # Increment size in MB
    sleep_time = 1  # Sleep time between increments in seconds

    # Start the storage stress test in a separate thread
    stress_test_thread = threading.Thread(target=storage_stress_test, args=(filename, initial_size_mb, increment_size_mb, sleep_time))
    stress_test_thread.start()

    # Start the Flask web server
    app.run(host='0.0.0.0', port=8080)

