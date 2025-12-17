
# ===== Build stage =====
FROM maven:3.9-eclipse-temurin-21 AS build
WORKDIR /app

# Copy Maven config and resolve dependencies (better caching)
COPY pom.xml .
# Pre-fetch dependencies to leverage caching between builds
RUN mvn -q -DskipTests dependency:go-offline

# Copy source and build
COPY src ./src
# Build the JAR (skip tests for faster builds; remove -DskipTests to run tests)
RUN mvn -q -DskipTests package

# ===== Runtime stage =====
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app

# Optional: run as non-root for security
# RUN addgroup -S app && adduser -S app -G app
# USER app

# Copy the fat jar (adjust name if you use a custom artifactId/classifier)
COPY --from=build /app/target/*.jar /app/app.jar

# Optional: expose management via Actuator healthcheck
# HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
#   CMD wget -qO- http://localhost:8080/actuator/health || exit 1

ENV JAVA_OPTS=""
EXPOSE 8080

# Start Spring Boot
ENTRYPOINT ["sh","-c","java $JAVA_OPTS]

# Start Spring Boot
ENTRYPOINT ["sh","-c","java $JAVA_OPTS -jar /app/app.jar"]
