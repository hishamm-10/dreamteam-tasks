from flask import Blueprint, jsonify, request
from models import db, Movie

api = Blueprint('api', __name__, url_prefix='/api')

# Root route for the API
@api.route('/', methods=['GET'])
def home():
    return jsonify({"message": "Welcome to the API! Use /api/movies for movie data."})

# Favicon route to avoid unnecessary errors
@api.route('/favicon.ico')
def favicon():
    return '', 204

# Get all movies
@api.route('/movies', methods=['GET'])
def get_movies():
    movies = Movie.query.all()
    return jsonify([movie.to_dict() for movie in movies])

# Get a specific movie by ID
@api.route('/movies/<int:movie_id>', methods=['GET'])
def get_movie(movie_id):
    movie = Movie.query.get_or_404(movie_id)
    return jsonify(movie.to_dict())

# Add a new movie
@api.route('/movies', methods=['POST'])
def add_movie():
    data = request.json
    new_movie = Movie(
        title=data['title'],
        year=data['year'],
        poster=data['poster'],
        plot=data['plot']
    )
    db.session.add(new_movie)
    db.session.commit()
    return jsonify(new_movie.to_dict()), 201

# Delete a movie by ID
@api.route('/movies/<int:movie_id>', methods=['DELETE'])
def delete_movie(movie_id):
    movie = Movie.query.get_or_404(movie_id)
    db.session.delete(movie)
    db.session.commit()
    return jsonify({"message": "Movie deleted successfully."}), 200
