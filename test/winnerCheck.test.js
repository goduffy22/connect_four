

var assert = chai.assert;

describe('Check Horizontal', function() {
    it('should be 3', function () {
        assert.equal(checkHorizontal(3, 0, "X", testGrid), 3);
    });
    it('should be 3', function () {
        assert.equal(checkHorizontal(3, 2, "X", testGrid), 3);
    });
    it('should be 3', function () {
        assert.equal(checkHorizontal(0, 4, "X", testGrid), 3);
    });
    it('should be 0', function () {
        assert.equal(checkHorizontal(1, 0, "X", testGrid), 0);
    });
    it('should be 1', function () {
        assert.equal(checkHorizontal(1, 2, "X", testGrid), 1);
    });
    it('should be 1', function () {
        assert.equal(checkHorizontal(5, 0, "X", testGrid), 2);
    });
    it('should be 1', function () {
        assert.equal(checkHorizontal(1, 2, "X", testGrid), 1);
    });

});

describe('Check Vertical', function() {
    it('should be 3', function () {
        assert.equal(checkVertical(1, 0, "X", testGrid), 0);
    });
    it('should be 2', function () {
        assert.equal(checkVertical(3, 0, "X", testGrid), 2);
    });
    it('should be 2', function () {
        assert.equal(checkVertical(4, 0, "X", testGrid), 2);
    });
    it('should be 2', function () {
        assert.equal(checkVertical(5, 0, "X", testGrid), 2);
    });
    it('should be 3', function () {
        assert.equal(checkVertical(1, 3, "X", testGrid), 3);
    });
    it('should be 2', function () {
        assert.equal(checkVertical(1, 6, "X", testGrid), 2);
    });
    it('should be 0', function () {
        assert.equal(checkVertical(4, 6, "X", testGrid), 0);
    });
});

describe('Check Left Diagonal', function() {
    it('should be 0', function () {
        assert.equal(checkLeftDiagonal(0, 6, "X", testGrid), 0);
    });
    it('should be 1', function () {
        assert.equal(checkLeftDiagonal(0, 5, "X", testGrid), 1);
    });
    it('should be 2', function () {
        assert.equal(checkLeftDiagonal(1, 5, "X", testGrid), 2);
    });
    it('should be 1', function () {
        assert.equal(checkLeftDiagonal(2, 4, "X", testGrid), 1);
    });
    it('should be 1', function () {
        assert.equal(checkLeftDiagonal(3, 3, "X", testGrid), 1);
    });
    it('should be 1', function () {
        assert.equal(checkLeftDiagonal(3, 1, "X", testGrid), 1);
    });
});

describe('Check Right Diagonal', function() {
    it('should be 0', function () {
        assert.equal(checkRightDiagonal(1, 0, "X", testGrid), 0);
    });
    it('should be 1', function () {
        assert.equal(checkRightDiagonal(1, 2, "X", testGrid), 1);
    });
    it('should be 5', function () {
        assert.equal(checkRightDiagonal(2, 4, "X", testGrid), 5);
    });
});

describe('winnerCheck', function(){
    it('should be true', function(){
        assert.equal(winnerCheck(2, 4, "X", testGrid), true);
    });
    it('should be true', function(){
        assert.equal(winnerCheck(0, 4, "X", testGrid), true);
    });
    it('should be true', function(){
        assert.equal(winnerCheck(3, 2, "X", testGrid), true);
    });
    it('should be false', function(){
        assert.equal(winnerCheck(1, 4, "X", testGrid), true);
    });
    it('should be false', function(){
        assert.equal(winnerCheck(2, 5, "X", testGrid), true);
    });
    it('should be false', function(){
        assert.equal(winnerCheck(5, 6, "X", testGrid), false);
    });

    it('should be true', function(){
        assert.equal(winnerCheck(5, 4, "O", testGrid), true);
    });
    it('should be true', function(){ //Even though not 4 in a row, this is why the last turn must be set
        assert.equal(winnerCheck(3, 3, "O", testGrid), true);
    });
    it('should be true', function(){
        assert.equal(winnerCheck(3, 2, "O", testGrid), true);
    });
    it('should be true', function(){
        assert.equal(winnerCheck(3, 2, "O", testGrid), true);
    });
    it('should be false', function(){
        assert.equal(winnerCheck(4, 5, "O", testGrid), false);
    });
})