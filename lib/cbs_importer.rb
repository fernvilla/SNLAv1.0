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

    if defined? lakers_feed.entries
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

    if defined? clippers_feed.entries
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
    end

    if defined? dodgers_feed.entries
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
    end

    if defined? angels_feed.entries
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
    end

    if defined? kings_feed.entries
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
    end

    if defined? ducks_feed.entries
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
    end

    if defined? preps_feed.entries
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
end