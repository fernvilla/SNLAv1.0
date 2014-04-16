require 'feedjira'

class CBSImporter
  def self.import_cbs
    source = "CBS Los Angeles"
    lakers_feed = Feedjira::Feed.fetch_and_parse("http://losangeles.cbslocal.com/category/sports/lakers/feed/")
    clippers_feed = Feedjira::Feed.fetch_and_parse("http://losangeles.cbslocal.com/category/sports/clippers/feed/")
    dodgers_feed = Feedjira::Feed.fetch_and_parse("http://losangeles.cbslocal.com/category/sports/dodgers/feed/")
    angels_feed = Feedjira::Feed.fetch_and_parse("http://losangeles.cbslocal.com/category/sports/angels/feed/")
    kings_feed = Feedjira::Feed.fetch_and_parse("http://losangeles.cbslocal.com/category/sports/kings/feed/")
    ducks_feed = Feedjira::Feed.fetch_and_parse("http://losangeles.cbslocal.com/category/sports/ducks/feed/")
    preps_feed = Feedjira::Feed.fetch_and_parse("http://losangeles.cbslocal.com/category/sports/high-school/feed/")

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
  end
end