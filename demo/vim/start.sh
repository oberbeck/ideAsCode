#!/bin/bash
docker run -v "$PWD":"/workdir" -w "/workdir" -p "4200:4200" -it --name nvim --rm nvim
