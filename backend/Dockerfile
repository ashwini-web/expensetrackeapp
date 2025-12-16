
# ===== Build stage =====
FROM maven:3.9-eclipse-temurin-21 AS build
WORKDIR /app

# Copy Maven config and resolve dependencies (better caching)
COPY pom.xml .
RUN mvn -q -DskipTests dependency:go-offline

# Copy source and build
COPY src ./src
RUN mvn -q -DskipTests package

# ===== Runtime stage =====
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app

# Copy the fat jar (adjust name if you use a custom artifactId)
COPY --from=build /app/target/*.jar /app/app.jar

ENV JAVA_OPTS=""
EXPOSE 8080

# Start Spring Boot
ENTRYPOINT ["sh","-c","java $JAVA_OPTS -jar /app/app.jar"
