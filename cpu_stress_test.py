import time
import threading
from flask import Flask, jsonify

app = Flask(__name__)

cpu_usage = []

def cpu_stress_test(initial_load, increment_load, sleep_time):
    """Continuously increase CPU load."""
    global cpu_usage
    current_load = initial_load

    while True:
        start_time = time.time()
        while time.time() - start_time < current_load:
            pass  # Busy-wait for the duration of current_load to create CPU load
        cpu_usage.append(current_load)
        current_load += increment_load
        time.sleep(sleep_time)

@app.route('/cpu-usage')
def get_cpu_usage():
    return jsonify(cpu_usage)

if __name__ == "__main__":
    initial_load = 0.5  # Initial CPU load in seconds
    increment_load = 0.9  # Increment load in seconds
    sleep_time = 1  # Sleep time between increments in seconds

    # Start the CPU stress test in a separate thread
    stress_test_thread = threading.Thread(target=cpu_stress_test, args=(initial_load, increment_load, sleep_time))
    stress_test_thread.start()

    # Start the Flask web server
    app.run(host='0.0.0.0', port=8080)

