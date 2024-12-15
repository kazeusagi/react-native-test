FROM node:22-bookworm-slim

RUN apt-get update && apt-get install -y \
  git \
  curl \
  unzip \
  openjdk-17-jdk \
  android-sdk \
  # sudo \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

# bunのインストール
RUN npm install -g bun

# non-root-userに切り替え
USER node
