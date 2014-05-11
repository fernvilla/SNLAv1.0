require 'feedjira'

class LakersImporter
  def self.import_blogs
    inside_the_lakers = Feedjira::Feed.fetch_and_parse("http://www.insidesocal.com/lakers/feed/")
    lakers_nation = Feedjira::Feed.fetch_and_parse("http://www.lakersnation.com/feed/")
    forum_blue_and_gold = Feedjira::Feed.fetch_and_parse("http://www.forumblueandgold.com/feed/")
    silver_screen_and_roll = Feedjira::Feed.fetch_and_parse("http://www.silverscreenandroll.com/rss/current")
    laker_nation = Feedjira::Feed.fetch_and_parse("http://lakernation.com/feed/")
    lakerholicz = Feedjira::Feed.fetch_and_parse("http://lakerholicz.com/feed")
    lake_show_life = Feedjira::Feed.fetch_and_parse("http://lakeshowlife.com/feed/")
    lake_show_life_two = Feedjira::Feed.fetch_and_parse("http://lakeshowlife.com/category/nba/nbanews/feed/")
    lake_show_life_three = Feedjira::Feed.fetch_and_parse("http://lakeshowlife.com/category/lakers-2/feed/")
    lake_show_life_four = Feedjira::Feed.fetch_and_parse("http://lakeshowlife.com/category/lakers/recaps/feed/")
    fansided = Feedjira::Feed.fetch_and_parse("http://fansided.com/tag/los-angeles-lakers/feed/")
    hoops_hype = Feedjira::Feed.fetch_and_parse("http://feeds.hoopshype.com/xml/rumors/tag/los_angeles_lakers.xml")
    nba_power_rankings = Feedjira::Feed.fetch_and_parse("http://www.nba.com/powerrankings/rss.xml")
    laker_liker = Feedjira::Feed.fetch_and_parse("http://www.nba.com/powerrankings/rss.xml")
    triple_threat = Feedjira::Feed.fetch_and_parse("http://www.nbclosangeles.com/blogs/triple-threat/?rss=y")
    land_o_lakers = Feedjira::Feed.fetch_and_parse("http://landolakers.com/feed/")
    real_gm = Feedjira::Feed.fetch_and_parse("http://basketball.realgm.com/rss/wiretap/26/13.xml")
    rant_sports = Feedjira::Feed.fetch_and_parse("http://www.rantsports.com/nba/teams/los-angeles-lakers/feed/")
    ny_times = Feedjira::Feed.fetch_and_parse("http://topics.nytimes.com/top/news/sports/probasketball/nationalbasketballassociation/losangeleslakers/?offset=10&s=newest&rss=1")

    if defined? chivas_feed.entries
      inside_the_lakers.entries.each do |entry|
        summary = entry.summary.gsub(/<[^>]*>/, '')
        Laker.where(url: entry.url).first_or_create(
          title:      entry.title,
          author:     entry.author,
          summary:    summary,
          published:  entry.published,
          url:        entry.url,
          image:      entry.image,
          source:     "Inside the Lakers"
        )
      end
    end

    if defined? lakers_nation.entries
      lakers_nation.entries.each do |entry|
        summary = entry.summary.gsub(/<[^>]*>/, '')
        Laker.where(url: entry.url).first_or_create(
          title:      entry.title,
          author:     entry.author,
          summary:    summary,
          published:  entry.published,
          url:        entry.url,
          image:      entry.image,
          source:     "Lakers Nation"
        )
      end
    end

    if defined? forum_blue_and_gold.entries
      forum_blue_and_gold.entries.each do |entry|
        summary = entry.summary.gsub(/<[^>]*>/, '')
        Laker.where(url: entry.url).first_or_create(
          title:      entry.title,
          author:     entry.author,
          summary:    summary,
          published:  entry.published,
          url:        entry.url,
          image:      entry.image,
          source:     "Forum Blue and Gold"
        )
      end
    end

    if defined? silver_screen_and_roll.entries
      silver_screen_and_roll.entries.each do |entry|
        Laker.where(url: entry.url).first_or_create(
          title:      entry.title,
          author:     entry.author,
          summary:    entry.summary,
          published:  entry.published,
          url:        entry.url,
          image:      entry.image,
          source:     "Silver Screen and Roll"
        )
      end
    end

    if defined? lakerholicz.entries
      lakerholicz.entries.each do |entry|
        summary = entry.summary.gsub(/<[^>]*>/, '')
        Laker.where(url: entry.url).first_or_create(
          title:      entry.title,
          author:     entry.author,
          summary:    summary,
          published:  entry.published,
          url:        entry.url,
          image:      entry.image,
          source:     "Lakerholicz"
        )
      end
    end

    if defined? lake_show_life.entries
      lake_show_life.entries.each do |entry|
        summary = entry.summary.gsub(/<[^>]*>/, '')
        Laker.where(url: entry.url).first_or_create(
          title:      entry.title,
          author:     entry.author,
          summary:    summary,
          published:  entry.published,
          url:        entry.url,
          image:      entry.image,
          source:     "Lake Show Life"
        )
      end
    end

    if defined? lake_show_life.entries
      lake_show_life_two.entries.each do |entry|
        summary = entry.summary.gsub(/<[^>]*>/, '')
        Laker.where(url: entry.url).first_or_create(
          title:      entry.title,
          author:     entry.author,
          summary:    summary,
          published:  entry.published,
          url:        entry.url,
          image:      entry.image,
          source:     "Lake Show Life"
        )
      end
    end

    if defined? lake_show_life_three.entries
      lake_show_life_three.entries.each do |entry|
        summary = entry.summary.gsub(/<[^>]*>/, '')
        Laker.where(url: entry.url).first_or_create(
          title:      entry.title,
          author:     entry.author,
          summary:    summary,
          published:  entry.published,
          url:        entry.url,
          image:      entry.image,
          source:     "Lake Show Life"
        )
      end
    end

    if defined? lake_show_life_four.entries
      lake_show_life_four.entries.each do |entry|
        summary = entry.summary.gsub(/<[^>]*>/, '')
        Laker.where(url: entry.url).first_or_create(
          title:      entry.title,
          author:     entry.author,
          summary:    summary,
          published:  entry.published,
          url:        entry.url,
          image:      entry.image,
          source:     "Lake Show Life"
        )
      end
    end

    if defined? fansided.entries
      fansided.entries.each do |entry|
        summary = entry.summary.gsub(/<[^>]*>/, '')
        Laker.where(url: entry.url).first_or_create(
          title:      entry.title,
          author:     entry.author,
          summary:    summary,
          published:  entry.published,
          url:        entry.url,
          image:      entry.image,
          source:     "Fansided"
        )
      end
    end

    if defined? chivas_feed.entries
      hoops_hype.entries.each do |entry|
        summary = entry.summary.gsub(/<[^>]*>/, '')
        Laker.where(title: entry.title).first_or_create(
          title:      entry.title,
          author:     entry.author,
          summary:    summary,
          published:  entry.published,
          url:        entry.url,
          image:      entry.image,
          source:     "Hoops Hype"
        )
      end
    end

    if defined? nba_power_rankings.entries
       nba_power_rankings.entries.each do |entry|
        summary = entry.summary.gsub(/<[^>]*>/, '')
        Laker.where(url: entry.url).first_or_create(
          title:      entry.title,
          author:     entry.author,
          summary:    summary,
          published:  entry.published,
          url:        entry.url,
          image:      entry.image,
          source:     "NBA.com"
        )
      end
    end

    if defined? triple_threat.entries
      triple_threat.entries.each do |entry|
        summary = entry.summary.gsub(/<[^>]*>/, '')
        Laker.where(url: entry.url).first_or_create(
          title:      entry.title,
          author:     entry.author,
          summary:    summary,
          published:  entry.published,
          url:        entry.url,
          image:      entry.image,
          source:     "Triple Threat"
        )
      end
    end

    if defined? land_o_lakers.entries
      land_o_lakers.entries.each do |entry|
        summary = entry.summary.gsub(/<[^>]*>/, '')
        Laker.where(url: entry.url).first_or_create(
          title:      entry.title,
          author:     entry.author,
          summary:    summary,
          published:  entry.published,
          url:        entry.url,
          # image:      entry.image,
          source:     "Land O' Lakers"
        )
      end
    end

    if defined? real_gm.entries
      real_gm.entries.each do |entry|
        summary = entry.summary.gsub(/<[^>]*>/, '')
        Laker.where(url: entry.url).first_or_create(
          title:      entry.title,
          author:     entry.author,
          summary:    summary,
          published:  entry.published,
          url:        entry.url,
          image:      entry.image,
          source:     "Real GM"
        )
      end
    end

    if defined? rant_sports.entries
      rant_sports.entries.each do |entry|
        summary = entry.summary.gsub(/<[^>]*>/, '')
        Laker.where(url: entry.url).first_or_create(
          title:      entry.title,
          author:     entry.author,
          summary:    summary,
          published:  entry.published,
          url:        entry.url,
          image:      entry.image,
          source:     "Rant Sports"
        )
      end
    end

    if defined? ny_times.entries
      ny_times.entries.each do |entry|
        summary = entry.summary.gsub(/<[^>]*>/, '')
        Laker.where(url: entry.url).first_or_create(
          title:      entry.title,
          author:     entry.author,
          summary:    summary,
          published:  entry.published,
          url:        entry.url,
          image:      entry.image,
          source:     "NY Times"
        )
      end
    end

    if defined? laker_nation.entries
      laker_nation.entries.each do |entry|
        summary = entry.summary.gsub(/<[^>]*>/, '')
        Laker.where(url: entry.url).first_or_create(
          title:      entry.title,
          author:     entry.author,
          summary:    summary,
          published:  entry.published,
          url:        entry.url,
          image:      entry.image,
          source:     "Laker Nation"
        )
      end
    end
  end
end