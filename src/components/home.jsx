import "../styles/home.css"

const Home = () => {

    
    return (
        <div className="home">
            <div class="first">
                <h1>Board.</h1>
                <div class="list">
                    <div class="comb">
                        <img src="images/dash.png" height="20" width="20" alt="" />
                        <a href=""><h6>Dashboard</h6></a>
                    </div>
                    <div class="comb">
                        <img src="images/tra.png" height="20" width="20" alt="" />
                        <a href="">Transactions</a>
                    </div>
                    <div class="comb">
                        <img src="images/sed.png" height="20" width="20" alt="" />
                        <a href="">Schedules</a>
                    </div>
                    <div class="comb">
                        <img src="images/user.png" height="20" width="20" alt="" />
                        <a href="">Users</a>
                    </div>
                    <div class="comb">
                        <img src="images/set.png" height="20" width="20" alt="" />
                        <a href="">Settings</a>
                    </div>
                </div>
                <div class="bot">
                    <a href="">Help</a> <br /><br />
                    <a href="">Contact Us</a>
                </div>
                <div className="new">
    <select name="MENU" id="">
        <option value="">MENU</option>
        <option value="">Dashboard</option>
        <option value="">Transcations</option>
        <option value="">Schedules</option>
        <option value="">Users</option>
        <option value="">Settings</option>
        
    </select>
</div>
            </div>



            <div class="second">
                <div class="one">
                    <h4>Dashboard</h4>
                    <input type="text" placeholder="Search..." />
                    <img src="images/bell.png" height="30" width="30" alt="" />
                    <img src="images/profile.jpg" id="pic" height="30" width="30" alt="" />
                </div>
                <div class="two">
                    <div id="box1" class="box">
                        <img src="images/mon.png" height="20" width="20" alt="" />
                        <p>Total Revenues</p>
                        <h5>$5,123,470</h5>
                    </div><div id="box2" class="box">
                        <img src="images/tags.png" height="20" width="20" alt="" />
                        <p>Total Transactions</p>
                        <h5>1,720</h5>
                    </div>
                    <div id="box3" class="box">
                        <img src="images/lik.png" height="20" width="20" alt="" />
                        <p>Total Likes</p>
                        <h5>9,977</h5>
                    </div>
                    <div id="box4" class="box">
                        <img src="images/users.png" height="20" width="20" alt="" />
                        <p>Total Users</p>
                        <h5>725</h5>
                    </div>
                </div>
            

            <div class="three">
                <img src="images/graph.png" alt="" height="260px" width="1125px" />
            </div>

            <div class="four">
                <img src="images/cir.png" alt="" height="190px" width="550px" />
                <img src="images/cont.png" alt="" height="190px" width="550px" />
            </div>
            </div>
        </div>
    );
}
export default Home;


