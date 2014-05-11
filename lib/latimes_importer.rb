require 'feedjira'

class LATimesImporter
  def self.import_la_times
    source = "LA Times"
    lakers_feed = Feedjira::Feed.fetch_and_parse("http://www.latimes.com/sports/lakers/rss2.0.xml")
    lakers_feed_two = Feedjira::Feed.fetch_and_parse("http://www.latimes.com/sports/lakers/lakersnow/rss2.0.xml")
    clippers_feed = Feedjira::Feed.fetch_and_parse("http://www.latimes.com/sports/basketball/nba/clippers/rss2.0.xml")
    dodgers_feed = Feedjira::Feed.fetch_and_parse("http://www.latimes.com/sports/baseball/mlb/dodgers/rss2.0.xml")
    dodgers_feed_two = Feedjira::Feed.fetch_and_parse("http://www.latimes.com/sports/dodgersnow/rss2.0.xml")
    kings_feed = Feedjira::Feed.fetch_and_parse("http://www.latimes.com/sports/hockey/nhl/kings/rss2.0.xml")
    trojans_feed = Feedjira::Feed.fetch_and_parse("http://www.latimes.com/sports/college/usc/rss2.0.xml")
    bruins_feed = Feedjira::Feed.fetch_and_parse("http://www.latimes.com/sports/college/ucla/rss2.0.xml")
    sparks_feed = Feedjira::Feed.fetch_and_parse("http://www.latimes.com/rss/topic/sports/basketball/los-angeles-sparks-ORSPT000448.topic")
    preps_feed = Feedjira::Feed.fetch_and_parse("http://www.latimes.com/sports/highschool/rss2.0.xml")
    preps_feed_two = Feedjira::Feed.fetch_and_parse("http://www.latimes.com/sports/varsity-times/rss2.0.xml")
    angels_feed = Feedjira::Feed.fetch_and_parse("http://www.latimes.com/sports/baseball/mlb/angels/rss2.0.xml")
    ducks_feed = Feedjira::Feed.fetch_and_parse("http://www.latimes.com/rss/topic/sports/ice-hockey/anaheim-ducks-ORSPT000063.topic")
    chivas_feed = Feedjira::Feed.fetch_and_parse("http://www.latimes.com/rss/topic/sports/soccer/chivas-usa-ORSPT00000425.topic")
    galaxy_feed = Feedjira::Feed.fetch_and_parse("http://www.latimes.com/rss/topic/sports/soccer/los-angeles-galaxy-ORSPT00000431.topic")

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

    if defined? lakers_feed_two.entries
      lakers_feed_two.entries.each do |entry|
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

    if defined? dodgers_feed_two.entries
      dodgers_feed_two.entries.each do |entry|
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

    if defined? trojans_feed.entries
      trojans_feed.entries.each do |entry|
        summary = entry.summary.gsub(/<[^>]*>/, '')
        Trojan.where(url: entry.url).first_or_create(
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

    if defined? bruins_feed.entries
      bruins_feed.entries.each do |entry|
        summary = entry.summary.gsub(/<[^>]*>/, '')
        Bruin.where(url: entry.url).first_or_create(
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

    if defined? sparks_feed.entries
      sparks_feed.entries.each do |entry|
        # summary = entry.summary.gsub(/<[^>]*>/, '')
        Spark.where(url: entry.url).first_or_create(
          title:      entry.title,
          author:     entry.author,
          summary:    entry.summary,
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

    if defined? preps_feed.entries
      preps_feed_two.entries.each do |entry|
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

    if defined? chivas_feed.entries
      chivas_feed.entries.each do |entry|
        summary = entry.summary.gsub(/<[^>]*>/, '')
        Chiva.where(url: entry.url).first_or_create(
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

    if defined? galaxy_feed.entries
      galaxy_feed.entries.each do |entry|
        summary = entry.summary.gsub(/<[^>]*>/, '')
        Galaxy.where(url: entry.url).first_or_create(
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