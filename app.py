from flask import Flask, request
from flask_restful import Resource, Api, reqparse
import pandas as pd
import sqlalchemy_iris
import pyreadstat

from sqlalchemy import create_engine

connection_string = "iris://SQLAdmin:Jotb2023#@k8s-f52f56e8-a6bb3124-30e915efc2-1e84128688139e2c.elb.eu-central-1.amazonaws.com:1972/USER"
app = Flask(__name__)
api = Api(app)
engine = create_engine(connection_string)

class satisfaction(Resource):
    def get(self):
        from sqlalchemy.sql import text
        sessions = engine.connect()
        result = sessions.execute(text('select * from test_df_clean05')) 
        line = ''
        for row in result:
            row = str(row)
            row = row.lstrip('(')
            row = row.rstrip(')')
            if line == '':
                line = '[{' + row + '}, '
            if line != '':
                line = line + '{' + row + '},'
            line = line.rstrip(',')
            line = line + ']'
        return {'return': line}, 200
    
    def post(self):
        data = request.get_json()
        age = data['age']
        social_class = data['social_class']
        public_user = data['public_user']
        long_term_illnes = data['long_term_illnes']
        
        from sqlalchemy.sql import text
        sessions = engine.connect()
        result = sessions.execute(text(f"SELECT PREDICT(Test05 use Test05_trained) as prediction with (${age}, ${social_class}, ${public_user}, ${long_term_illnes})")) 
        return {'result': result[0]}, 200
        
    
api.add_resource(satisfaction, '/satisfaction')

if __name__ == '__main__':
    app.run()
