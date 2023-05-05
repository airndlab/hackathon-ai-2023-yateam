# Используем OpenJDK 17 в качестве базового образа
FROM openjdk:17-jdk-alpine

ARG JAR_FILE

# Копируем JAR файл вашего приложения в контейнер
COPY $JAR_FILE /app.jar

# Устанавливаем рабочую директорию контейнера
WORKDIR /

# Определяем команду, которая будет выполнена при запуске контейнера
# Передаем конфигурацию через SPRING_CONFIG_LOCATION
CMD ["java", "-jar", "app.jar"]
