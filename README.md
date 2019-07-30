# landing-angular
Landing page made with Angular and Bootstrap

## Real example
http://....

## Instructions
```
git clone https://github.com/juanan-hernandez/landing-angular.git
cd landing-angular
npm install 
```



# AWS connection

# Update your Ubuntu packages
sudo apt-get update
sudo apt upgrade

# Install git to pull your code
sudo apt-get install -y git

# Install npm and nodejs
sudo apt-get install -y npm
sudo apt-get install -y nodejs

# Update npm
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs


# We will use Ngnix server for this setup
sudo apt-get install -y nginx

# Next, install Angular CLI, needed to run Angular services.
sudo npm install -g @angular/cli

# 2.2 Configure Ngnix
cd /etc/nginx/sites-available

# create a file your with the site name
sudo vim landing-angular

# Update File with below content
server {     
    listen 80;      
    listen [::]:80;      
    server_name <public_ip>;      
    root /var/www/landing-angular/dist;   
    server_tokens off;   
    index index.html index.htm;     
 
    location / {         
        # First attempt to server request as file, then         
        # as directory, then fall back to displaying a 404.          
        try_files $uri $uri/ /index.html =404;      
    }
}

# Let's save this file and link it in another directory
cd /etc/nginx/sites-enabled 
sudo ln -s ../sites-available/landing-angular
ls -l
sudo rm default //removes default directory

# Now its time to bring in the code and build.
cd /var/www
git clone https://github.com/juanan-hernandez/landing-angular.git
cd /var/www/landing-angular
sudo npm install --unsafe-perms 
sudo npm update --unsafe-perms
ng build --prod
sudo npm update

# Now restart Ngnix server
sudo nginx -s reload
