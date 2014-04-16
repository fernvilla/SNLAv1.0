require 'feedjira'

class DailyNewsImporter
  def self.import_daily_news
    source = "Daily News"
    angels_feed = Feedjira::Feed.fetch_and_parse("http://www.dailynews.com/section?template=RSS&profile=4000074&mime=xml")
    clippers_feed = Feedjira::Feed.fetch_and_parse("http://www.dailynews.com/section?template=RSS&profile=4000077&mime=xml")
    dodgers_feed = Feedjira::Feed.fetch_and_parse("http://www.dailynews.com/section?template=RSS&profile=4000075&mime=xml")
    ducks_feed = Feedjira::Feed.fetch_and_parse("http://www.dailynews.com/section?template=RSS&profile=4000083&mime=xml")
    preps_feed = Feedjira::Feed.fetch_and_parse("http://www.dailynews.com/section?template=RSS&profile=4000089&mime=xml")
    kings_feed = Feedjira::Feed.fetch_and_parse("http://www.dailynews.com/section?template=RSS&profile=4000082&mime=xml")
    lakers_feed = Feedjira::Feed.fetch_and_parse("http://www.dailynews.com/section?template=RSS&profile=4000078&mime=xml")

    angels_feed.entries.each do |entry|
      summary = entry.summary.gsub(/<[^>]*>/, '')
      Angel.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        image:      entry.image,
        source:     source
      )
    end

    clippers_feed.entries.each do |entry|
      summary = entry.summary.gsub(/<[^>]*>/, '')
      Clipper.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        image:      entry.image,
        source:     source
      )
    end

    dodgers_feed.entries.each do |entry|
      summary = entry.summary.gsub(/<[^>]*>/, '')
      Dodger.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        image:      entry.image,
        source:     source
      )
    end

    ducks_feed.entries.each do |entry|
      summary = entry.summary.gsub(/<[^>]*>/, '')
      Duck.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        image:      entry.image,
        source:     source
      )
    end

    preps_feed.entries.each do |entry|
      summary = entry.summary.gsub(/<[^>]*>/, '')
      Prep.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        image:      entry.image,
        source:     source
      )
    end

    kings_feed.entries.each do |entry|
      summary = entry.summary.gsub(/<[^>]*>/, '')
      King.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        image:      entry.image,
        source:     source
      )
    end

    lakers_feed.entries.each do |entry|
      summary = entry.summary.gsub(/<[^>]*>/, '')
      Laker.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        image:      entry.image,
        source:     source
      )
    end
  end
end