# Use an official OpenJDK runtime as a parent image
FROM eclipse-temurin:21-jdk

# Set the working directory
WORKDIR /usr/src/minecraft_server

# Install wget
RUN apt-get update && apt-get install -y wget

# Download the Minecraft server jar using the specified link
RUN wget -O minecraft_server.1.21.jar https://piston-data.mojang.com/v1/objects/450698d1863ab5180c25d7c804ef0fe6369dd1ba/server.jar

# Accept the Minecraft EULA
RUN echo "eula=true" > eula.txt

# Copy server properties
COPY server.properties server.properties

# Expose the Minecraft server port
EXPOSE 25565

# Run the Minecraft server
CMD ["java", "-Xmx1024M", "-Xms1024M", "-jar", "minecraft_server.1.21.jar", "nogui"]

