# Dockerfile
FROM python:3.9-slim

# Set the working directory
WORKDIR /app

# Copy the Python script into the container
COPY memory_stress_test.py .

# Install Flask
RUN pip install flask

# Expose port 3000
EXPOSE 8080

# Run the Python script
CMD ["python", "memory_stress_test.py"]

