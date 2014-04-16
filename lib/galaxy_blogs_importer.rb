require 'feedjira'

class GalaxyImporter
  def self.import_blogs
    lag_confidential = Feedjira::Feed.fetch_and_parse("http://www.lagconfidential.com/rss/current")
    corner_of_the_galaxy = Feedjira::Feed.fetch_and_parse("http://cornerofthegalaxy.com/feed/")

    lag_confidential.entries.each do |entry|
      # summary = entry.summary.gsub(/<[^>]*>/, '')
      Galaxy.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    entry.summary,
        published:  entry.published,
        url:        entry.url,
        image:      entry.image,
        source:     "LAG Confidential"
      )
    end

    # corner_of_the_galaxy.entries.each do |entry|
    #   summary = entry.summary.gsub(/<[^>]*>/, '')
    #   Galaxy.where(url: entry.url).first_or_create(
    #     title:      entry.title,
    #     author:     entry.author,
    #     summary:    summary,
    #     published:  entry.published,
    #     url:        entry.url,
    #     image:      entry.image,
    #     source:     "Corner of the Galaxy"
    #   )
    # end
  end
end