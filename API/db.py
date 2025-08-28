# db.py
from pymongo import MongoClient

try:
    client = MongoClient("mongodb://localhost:27017/")
    db = client["tienda_ropa"]
    prendas = db["prendas"]
    marcas = db["marcas"]
    print("✅ Conexión a MongoDB exitosa")
except Exception as e:
    print("❌ Error de conexión:", e)