describe('blog app', function() {
  describe('show post view', function(){
    beforeEach(function() {
      browser.get('http://localhost:8000/#/posts');
    });

    it('should have the right number of posts', function() {
      var posts = element.all(by.repeater('post in posts'));
    
      expect(posts.count()).toBe(9);
    });
  });
});
