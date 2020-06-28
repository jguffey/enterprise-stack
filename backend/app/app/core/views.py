import logging

from flask import request

from ..main import app


@app.route('/')
def home():
   return "hello world!"


@app.after_request
def add_header(response):
    white_list = ['localhost', 'http://dev.app.local', 'http://marketing.app.local', 'http://api.app.local']
    # If there's an origin in the headers (sometimes there's not.)
    if 'Origin' in request.headers:
        request_origin = f"{request.headers['Origin']}"
        # If this is from what of our sites
        if request_origin in white_list:
            response.headers.add('Access-Control-Allow-Origin', request_origin)
            response.headers.add('Access-Control-Allow-Credentials', 'true')
            response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
            response.headers.add('Access-Control-Allow-Headers', 'Cache-Control')
            response.headers.add('Access-Control-Allow-Headers', 'X-Requested-With')
            response.headers.add('Access-Control-Allow-Headers', 'Authorization')
            response.headers.add('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    return response
