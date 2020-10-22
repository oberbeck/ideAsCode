FROM ubuntu

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    apt-get install -y \
        neovim
    
WORKDIR /workdir

ENTRYPOINT nvim ./
