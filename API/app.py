from flask import Flask
from routes.prendas import prendas_bp
from routes.marcas import marcas_bp
from routes.estadisticas import estadisticas_bp

app = Flask(__name__)
app.register_blueprint(prendas_bp)
app.register_blueprint(marcas_bp)
app.register_blueprint(estadisticas_bp)

if __name__ == '__main__':
    app.run(debug=True)