# Dockerfile
FROM python:3.9-slim

# Set the working directory
WORKDIR /app

# Copy the Python script into the container
COPY storage_stress_test.py .

# Install Flask
RUN pip install flask

# Expose port 8080
EXPOSE 8080

# Run the Python script
CMD ["python", "storage_stress_test.py"]

