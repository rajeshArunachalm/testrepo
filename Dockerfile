# Use a base image with JDK, Maven, and Tomcat installed
FROM tomcat:9-jdk11-openjdk-slim AS build

# Install Maven
RUN apt-get update && apt-get install -y maven && apt-get clean

# Set up environment variables
ENV MAVEN_HOME /usr/share/maven

# Copy the Maven project into the container
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN rm -rf /usr/src/app/target
# Build the Maven project
RUN mvn clean install

# Copy the WAR file to the Tomcat webapps directory
RUN cp target/*.war $CATALINA_HOME/webapps/

# Expose the default Tomcat port
EXPOSE 9443

# Start Tomcat
CMD ["catalina.sh", "run"]
