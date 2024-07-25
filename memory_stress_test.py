import time
import threading
from flask import Flask, jsonify

app = Flask(__name__)

memory_usage = []

def allocate_memory(size_mb):
    """Allocate a list of the given size in megabytes."""
    size = size_mb * 1024 * 1024  # Convert megabytes to bytes
    allocated = bytearray(size)
    return allocated

def memory_stress_test(initial_size_mb, increment_size_mb, sleep_time):
    """Continuously increase memory usage by allocating more memory."""
    global memory_usage
    allocated_memory = []
    current_size = initial_size_mb
    
    while True:
        allocated_memory.append(allocate_memory(current_size))
        memory_usage.append(current_size)
        current_size += increment_size_mb
        time.sleep(sleep_time)

@app.route('/memory-usage')
def get_memory_usage():
    return jsonify(memory_usage)

if __name__ == "__main__":
    initial_size_mb = 10  # Initial memory allocation size in MB
    increment_size_mb = 10  # Increment size in MB
    sleep_time = 1  # Sleep time between increments in seconds

    # Start the memory stress test in a separate thread
    stress_test_thread = threading.Thread(target=memory_stress_test, args=(initial_size_mb, increment_size_mb, sleep_time))
    stress_test_thread.start()

    # Start the Flask web server
    app.run(host='0.0.0.0', port=3000)

