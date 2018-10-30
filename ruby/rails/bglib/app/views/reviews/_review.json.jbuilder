json.extract! review, :id, :game_id, :title, :youtube_id, :created_at, :updated_at
json.url review_url(review, format: :json)
