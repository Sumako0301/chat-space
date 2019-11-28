json.array! @users do |user|
  # json.content      message.content
  # json.image        message.image.url
  json.user_name    user.name
  json.id           user.id
end