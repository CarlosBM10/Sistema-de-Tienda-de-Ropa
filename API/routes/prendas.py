from flask import Blueprint, jsonify
from db import prendas

prendas_bp = Blueprint('prendas', __name__)

@prendas_bp.route('/api/prendas')
def obtener_prendas():
    resultado = list(prendas.find({}, {'_id': 0}))
    return jsonify(resultado)