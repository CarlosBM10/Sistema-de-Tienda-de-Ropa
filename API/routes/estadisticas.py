from flask import Blueprint, jsonify
from db import prendas

estadisticas_bp = Blueprint('estadisticas', __name__)

@estadisticas_bp.route('/api/ventas')
def ventas_por_prenda():
    resultado = list(prendas.find({}, {'_id': 0, 'nombre': 1, 'vendidas': 1}))
    return jsonify(resultado)

@estadisticas_bp.route('/api/top-marcas')
def top_marcas():
    pipeline = [
        {"$group": {"_id": "$marca", "total_vendidas": {"$sum": "$vendidas"}}},
        {"$sort": {"total_vendidas": -1}},
        {"$limit": 5}
    ]
    resultado = list(prendas.aggregate(pipeline))
    return jsonify(resultado)