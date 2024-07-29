# Use an official OpenJDK runtime as a parent image
FROM openjdk:11-jre-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the JAR file into the container at /app
wget https://downloads.metabase.com/v0.45.2/metabase.jar
#COPY metabase.jar /app/metabase.jar

# Expose the default Tomcat port
EXPOSE 3000

# Run the JAR file
ENTRYPOINT ["java", "-jar", "/app/metabase.jar"]

