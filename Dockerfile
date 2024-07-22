FROM python:3.9-slim

WORKDIR /app

# Install gcc and python3-dev
RUN apt-get update && apt-get install -y gcc python3-dev

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY app.py app.py

EXPOSE 5000

CMD ["python", "app.py"]

