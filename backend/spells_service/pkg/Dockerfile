FROM golang:1.22-alpine as build

WORKDIR /app
COPY . .

RUN go mod download && \
    go build -o /app/spell_server

FROM alpine:3.14 as prod
COPY --from=build /app/spell_server /spell_server

EXPOSE 80

ENTRYPOINT ["./spell_server"]

