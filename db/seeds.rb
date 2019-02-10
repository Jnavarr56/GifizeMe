# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

emoji_names = ":smile:, :laughing:, :blush:, :smiley:, :relaxed:, :smirk:, :heart_eyes:, :kissing_heart:, :kissing_closed_eyes:, :flushed:, :relieved:, :satisfied:, :grin:, :wink:, :stuck_out_tongue_winking_eye:, :stuck_out_tongue_closed_eyes:, :grinning:, :kissing:, :kissing_smiling_eyes:, :stuck_out_tongue:, :sleeping:, :worried:, :frowning:, :anguished:, :open_mouth:, :grimacing:, :confused:, :hushed:, :expressionless:, :unamused:, :sweat_smile:, :sweat:, :disappointed_relieved:, :weary:, :pensive:, :disappointed:, :confounded:, :fearful:, :cold_sweat:, :persevere:, :cry:, :sob:, :joy:, :astonished:, :scream:, :tired_face:, :angry:, :rage:, :triumph:, :sleepy:, :yum:, :mask:, :sunglasses:, :dizzy_face:, :imp:, :smiling_imp:, :neutral_face:".gsub!(':', '').split(', ')

AppEmoji.delete_all

emoji_names.each do |e|

    em = Emoji.find_by_alias(e.strip())

    if !(em.name.nil? && em.raw.nil?)

        AppEmoji.create(name: em.name, code: em.raw)

    end

end


