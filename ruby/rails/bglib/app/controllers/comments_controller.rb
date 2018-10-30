class CommentsController < ApplicationController
  before_action :set_game

  def create
    comment = @game.comments.new(comment_params)
    if comment.save
      redirect_to @game, notice: "Comment created!"
    end
  end

  def destroy
    comment = @game.comments.find(params[:id])
    comment.destroy
    redirect_to @game, notice: "Comment destroyed!"
  end

  private

  def set_game
    @game = Game.find(params[:game_id])
  end

  def comment_params
    params.require(:comment).permit(:author, :message)
  end
end
