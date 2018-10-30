class RenameReviewUrlToYoutubeId < ActiveRecord::Migration[5.2]
  def change
    rename_column :reviews, :url, :youtube_id
  end
end
