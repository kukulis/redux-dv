FROM nginx:1.24-bullseye

RUN apt-get update
RUN apt-get -y install less vim iputils-ping zip libzip-dev

RUN addgroup --gid=1000 app
RUN adduser --disabled-password --quiet --uid=1000 --gid=1000 --no-create-home --gecos GECOS app

RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - && apt-get install -y nodejs

# RUN mkdir /etc/nginx/templates

# COPY ./nginx/default.conf.template /etc/nginx/templates

# RUN envsubst < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf
# RUN cp /etc/nginx/templates/default.conf.template /etc/nginx/conf.d/default.conf

EXPOSE 3000
EXPOSE 5173

CMD ["nginx", "-g", "daemon off;"]

