---
title: 'Hi Guys'
date: '2022-05-16'
desc: 'A blablabla'
image: 'https://cdn.dribbble.com/users/5981988/screenshots/18252395/media/794a940cca2a670133dd575a72e3c2c7.png?compress=1&resize=400x300&vertical=top'
---

```docker
# Komentar di Dockerfile gini caranya
# FROM biasanya di 1 image cuma satu
# Kecuali kamu mau bikin multi-stage build
# sayangnya nggak dibahas disini, hehe :)
FROM (image)
FROM python:3.9-buster
FROM golang:1.17.0-alpine3.13

WORKDIR (set current working directory)
WORKDIR /app
WORKDIR /home/usr/app

# Command ini bisa kamu lakuin berkali-kali
RUN (jalanin command di shell)
RUN pip install
RUN go

# COPY ini bisa menerima Glob
COPY (literally copy)
COPY package*.json .
COPY . .

ENV (kasih environment variable)
ENV PORT=3000
ENV SECRET_KEY=ajsdfnsidjfnWDIJRN

# Kamu juga bisa buka lebih dari 1 port
# kalau app nya emang mau expose lebih dari 1 port
EXPOSE (buka port)
EXPOSE 9229
EXPOSE 81

ARG (argument kalo punya)

CMD (main command)
CMD ["./app"]
CMD ["node", "index.js"]
```
