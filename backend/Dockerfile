
# ===== Build stage =====
FROM maven:3.9-eclipse-temurin-21 AS build
WORKDIR /app

# Copy Maven config and resolve dependencies for better caching
COPY pom.xml .
RUN mvn -q -DskipTests dependency:go-offline

# Copy source and build
COPY src ./src
RUN mvn -q -DskipTests package

# ===== Runtime stage =====
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app

# Optional: run as non-root
# RUN addgroup -S app && adduser -S app -G app
# USER app

# Copy the fat JAR
COPY --from=build /app/target/*.jar /app/app.jar

ENV JAVA_OPTS=""
EXPOSE 8080

# Use exec form; one ENTRYPOINT only.
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
# If you want to pass extra JVM args at runtime via JAVA_OPTS, use CMD with shell expansion:
# Keep ENTRYPOINT as Java, and let CMD append defaults (can be overridden by `docker run# Keep ENTRYPOINT as Java, and let CMD append defaults (can be overridden by `docker run ... <args>`).

