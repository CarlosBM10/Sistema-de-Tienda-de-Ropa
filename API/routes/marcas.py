from flask import Blueprint, jsonify
from db import prendas

marcas_bp = Blueprint('marcas', __name__)

@marcas_bp.route('/api/top-marcas')
def top_marcas():
    pipeline = [
        {"$group": {"_id": "$marca", "total_vendidas": {"$sum": "$vendidas"}}},
        {"$sort": {"total_vendidas": -1}},
        {"$limit": 5}
    ]
    resultado = list(prendas.aggregate(pipeline))
    return jsonify(resultado)