# Use a base image with JDK and Maven installed
FROM maven:3.8.4-jdk-11 AS build

# Set up environment variables
ENV TOMCAT_VERSION 9.0.56
ENV CATALINA_HOME /opt/tomcat

# Install necessary tools
RUN apt-get update && \
    apt-get install -y wget && \
    rm -rf /var/lib/apt/lists/*

# Download and extract Apache Tomcat
RUN wget https://downloads.apache.org/tomcat/tomcat-9/v${TOMCAT_VERSION}/bin/apache-tomcat-${TOMCAT_VERSION}.tar.gz -O /tmp/tomcat.tar.gz && \
    mkdir -p $CATALINA_HOME && \
    tar xf /tmp/tomcat.tar.gz --strip-components=1 -C $CATALINA_HOME && \
    rm /tmp/tomcat.tar.gz

# Remove unnecessary files and directories
RUN rm -rf $CATALINA_HOME/webapps/examples $CATALINA_HOME/webapps/docs $CATALINA_HOME/webapps/ROOT $CATALINA_HOME/webapps/host-manager $CATALINA_HOME/webapps/manager

# Copy the Maven project into the container
COPY . /usr/src/app
WORKDIR /usr/src/app

# Build the Maven project
RUN mvn clean install

# Copy the WAR file to the Tomcat webapps directory
RUN cp target/*.war $CATALINA_HOME/webapps/dockeransible.war

# Expose the default Tomcat port
EXPOSE 8080

# Start Tomcat
CMD ["catalina.sh", "run"]
