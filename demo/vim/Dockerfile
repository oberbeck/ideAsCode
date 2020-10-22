FROM ubuntu

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    apt-get install -y \
        neovim \
        nodejs \
        npm \
        curl
    
WORKDIR /workdir

ENTRYPOINT nvim ./
