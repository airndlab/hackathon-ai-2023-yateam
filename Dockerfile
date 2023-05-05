# Используем OpenJDK 17 в качестве базового образа
FROM openjdk:17-jdk-alpine

ARG JAR_FILE=build/libs/*.jar
ARG CONFIG_FILE=config/application-docker.yml

# Копируем JAR файл вашего приложения и конфигурацию в контейнер
COPY $JAR_FILE /app.jar
COPY $CONFIG_FILE /application.yml

ENV SPRING_CONFIG_LOCATION=/application.yml

# Устанавливаем рабочую директорию контейнера
WORKDIR /

# Определяем команду, которая будет выполнена при запуске контейнера
CMD ["java", "-jar", "app.jar"]
