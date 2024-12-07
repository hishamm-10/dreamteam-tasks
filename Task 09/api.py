from flask import Flask
from models import db
from routes import api
from config import Config

app = Flask(__name__)
app.config.from_object(Config)

# Initialize database and register API blueprint
db.init_app(app)
app.register_blueprint(api)

# Create database tables if they don't exist
with app.app_context():
    db.create_all()

# Debug registered routes (optional)
print("Registered Routes:")
for rule in app.url_map.iter_rules():
    print(f"{rule} [{', '.join(rule.methods)}]")

if __name__ == '__main__':
    app.run(debug=True)
