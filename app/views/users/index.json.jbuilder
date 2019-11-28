json.array! @users do |user|
  # json.content      message.content
  # json.image        message.image.url
  json.created_at         user.created_at.strftime("%Y/%m/%d %H:%M")
  json.user_name    user.name
  json.id           user.id
end