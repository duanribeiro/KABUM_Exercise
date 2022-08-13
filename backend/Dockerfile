FROM python:3.9
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
RUN mkdir /app
WORKDIR /app
ADD requirements.txt /app/
RUN pip3 install --upgrade pip && pip3 install -r requirements.txt
ADD . /app/
ENTRYPOINT ["/app/docker-entrypoint.sh"]