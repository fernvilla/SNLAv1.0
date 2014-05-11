require 'feedjira'

class FoxSportsImporter
  def self.import_fox_sports
    source = "FOX Sports"
    lakers_feed = Feedjira::Feed.fetch_and_parse("http://feeds.foxsports.com/feedout/syndicatedContent?categoryId=71087")
    clippers_feed = Feedjira::Feed.fetch_and_parse("http://feeds.foxsports.com/feedout/syndicatedContent?categoryId=71086")
    dodgers_feed = Feedjira::Feed.fetch_and_parse("http://feeds.foxsports.com/feedout/syndicatedContent?categoryId=71605")
    angels_feed = Feedjira::Feed.fetch_and_parse("http://feeds.foxsports.com/feedout/syndicatedContent?categoryId=71589")
    ducks_feed = Feedjira::Feed.fetch_and_parse("http://feeds.foxsports.com/feedout/syndicatedContent?categoryId=66324")
    kings_feed = Feedjira::Feed.fetch_and_parse("http://feeds.foxsports.com/feedout/syndicatedContent?categoryId=66307")
    bruins_football_feed = Feedjira::Feed.fetch_and_parse("http://feeds.foxsports.com/feedout/syndicatedContent?categoryId=86094")
    bruins_basketball_feed = Feedjira::Feed.fetch_and_parse("http://feeds.foxsports.com/feedout/syndicatedContent?categoryId=71631")
    bruins_women_feed = Feedjira::Feed.fetch_and_parse("http://feeds.foxsports.com/feedout/syndicatedContent?categoryId=1393")
    trojans_football_feed = Feedjira::Feed.fetch_and_parse("http://feeds.foxsports.com/feedout/syndicatedContent?categoryId=86095")
    trojans_basketball_feed = Feedjira::Feed.fetch_and_parse("http://feeds.foxsports.com/feedout/syndicatedContent?categoryId=71635")
    trojans_women_feed = Feedjira::Feed.fetch_and_parse("http://feeds.foxsports.com/feedout/syndicatedContent?categoryId=1298")
    sparks_feed = Feedjira::Feed.fetch_and_parse("http://feeds.foxsports.com/feedout/syndicatedContent?categoryId=358")

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

    if defined? bruins_football_feed.entries
      bruins_football_feed.entries.each do |entry|
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

    if defined? brui.entries
      bruins_basketball_feed.entries.each do |entry|
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

    if defined? bruins_women_feed.entries
      bruins_women_feed.entries.each do |entry|
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

    if defined? trojans_football_feed.entries
      trojans_football_feed.entries.each do |entry|
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

    if defined? trojans_basketball_feed.entries
      trojans_basketball_feed.entries.each do |entry|
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

    if defined? trojans_women_feed.entries
      trojans_women_feed.entries.each do |entry|
        Trojan.where(url: entry.url).first_or_create(
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

    if defined? sparks_feed.entries
      sparks_feed.entries.each do |entry|
        summary = entry.summary.gsub(/<[^>]*>/, '')
        Spark.where(url: entry.url).first_or_create(
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