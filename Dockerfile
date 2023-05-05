# Используем OpenJDK 17 в качестве базового образа
FROM openjdk:17-jdk-alpine

# Копируем JAR файл вашего приложения в контейнер
COPY ./build/libs/hackathon-ai-2023-yateam-1.jar /app.jar

# Устанавливаем рабочую директорию контейнера
WORKDIR /

# Определяем команду, которая будет выполнена при запуске контейнера
# Передаем конфигурацию через SPRING_CONFIG_LOCATION
CMD ["java", "-jar", "app.jar"]
