{ pkgs, lib, config, inputs, ... }:
let 
  nodejs-pkgs = import inputs.nix-nodejs { inherit (pkgs) system; };
in
{

  env.GREET = "devenv";

  packages = [ 
    pkgs.git
    pkgs.distrobox
    pkgs.podman
  ];

  # Languages
  languages.javascript = {
    enable = true;
    package = pkgs.nodejs_22;
    npm = {
      enable = true;
      install.enable = false;
    };
  };

  # enterShell = ''
  #   # echo "Creating ubuntu container..."
  #   # distrobox create ubuntu -i ubuntu
  #   # echo "Entering container"
  #   # distrobox enter ubuntu
  #   # echo "Installing npm packages"
  #   # npm i
  # '';
}
